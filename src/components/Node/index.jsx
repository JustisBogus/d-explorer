import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setLoadingAction from '../../actions/Loading/setLoadingAction';
import setLoadedAction from '../../actions/Loading/setLoadedAction';
import loadChildren from '../../actions/loadChildrenAction';
import toggleChildren from '../../actions/toggleChildrenAction';
import openModalAction from '../../actions/Modal/openModalAction';
import unmarkChildren from '../../actions/unmarkChildren';
import setFocus from '../../actions/setFocus';
import { Transition, animated, Spring } from 'react-spring/renderprops';
import RequestsManager, { requestName } from '../../utils/RequestsManager';

import './styles.css';

export class Node extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false }
      }

    onOpenModal = () => {
        this.props.openModalAction({enrolleeId: this.props.id})
    };

    handleClick = async (nodeId) => {
        this.props.setFocus(nodeId);
        const {
            id, onLoad, showChildren, sourceUrl, numberOfChildren,
            setLoading, setLoaded, children, animate
        } = this.props;
        
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];

            if (children.length === 0) {
                const url = sourceUrl + `?id=` + id;
                childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);
            }
            
            if (!childrenResult.errors) {
                onLoad(id, showChildren, childrenResult);
            }

            setLoaded();
        }
  
        this.setState({ clicked: true });
    
    }

    render() {
        const { title, numberOfChildren, id, focusNode, parent, animate } = this.props;
        const classList = ['Node__Container'];

        if (numberOfChildren === 0 && id !== focusNode) {
            classList.push('disabled');
        }
        
        if (parent == focusNode) {
            classList.push('focus');
        }

        if (id === focusNode) {
            classList.push('selected');
        }

        let animationMargin;

        if (animate) {
            animationMargin = -500;
        } else {
            animationMargin = 0;
        }

        let parentNode = false;

        if (focusNode == id) {
            parentNode = true;
        }

        let animationScaleFrom;
        let animationScaleTo;
        let enter;
     
        if (animate && focusNode != id) {
            animationScaleFrom = { opacity: 0, transform: `scale(0.8)`} 
            animationScaleTo = { opacity: 1, transform: `scale(1)`}
            enter={ opacity: 1, transform: `scale(1)`}
        }
        else {
            console.log('no animate ' ,id);
            animationScaleFrom = { opacity: 1,  transform: `scale(1)`}
            animationScaleTo = { opacity: 1, transform: `scale(1)`} 
            enter={ opacity: 1, transform: `scale(1)`}
        }
     
        return (
            <Transition
                native
                items={true}
                from={animationScaleFrom}
                to={animationScaleTo}
                enter={enter}
                leave={animationScaleFrom}
                onRest={focusNode == id ? () => this.props.unmarkChildren(id) : null}
            >
                {show => show && (props => (
                    <animated.div style={props}>
                        <div className={classList.join(' ')}>
                            <div onClick={() => this.handleClick(id)} className="Node__Title">
                                <span>{title}</span>                      
                                <div>{numberOfChildren}</div>
                            </div>
                            <div className="Node__ModalButtonContainer" onClick={this.onOpenModal}>
                                <i className="fa fa-external-link"></i>
                            </div>
                        </div> 
                    </animated.div>
                ))}
            </Transition>     
        );
    }
}


export const nodeProps = {
    id: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    showChildren: PropTypes.bool,
    animate: PropTypes.bool,
    numberOfChildren: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        numberOfChildren: PropTypes.number.isRequired,
    })),
    sourceUrl: PropTypes.string,
    setLoading: PropTypes.func.isRequired,
    setLoaded: PropTypes.func.isRequired
};
nodeProps.children = PropTypes.arrayOf(PropTypes.shape(nodeProps).isRequired);

Node.propTypes = nodeProps;

Node.defaultProps = {
    showChildren: false,
    children: [],
}

export default connect(
    state => ({
        sourceUrl: state.variables.sourceUrl,
        focusNode: state.variables.focusNode,
    }),
    dispatch => ({
        onLoad: (id, show, children) => {
            if (show) {
                dispatch(toggleChildren(id));
            } else {
                dispatch(loadChildren(id, children));
                dispatch(toggleChildren(id));
            }
        },
        unmarkChildren: (id) => { dispatch(unmarkChildren(id)) },
        setLoading: () => { dispatch(setLoadingAction()); },
        setLoaded: () => { dispatch(setLoadedAction()); },
        openModalAction: (enrolleeId) => dispatch(openModalAction(enrolleeId)),
        setFocus: (id) => { dispatch(setFocus(id)); },
    }),
)(Node);