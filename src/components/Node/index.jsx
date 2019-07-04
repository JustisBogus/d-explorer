import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setLoadingAction from '../../actions/Loading/setLoadingAction';
import setLoadedAction from '../../actions/Loading/setLoadedAction';
import loadChildren from '../../actions/loadChildrenAction';
import toggleChildren from '../../actions/toggleChildrenAction';
import openModalAction from '../../actions/Modal/openModalAction';
import unmarkChildren from '../../actions/unmarkChildren';
import setLoadMoreIndex from '../../actions/setLoadMoreIndex';
import setFocus from '../../actions/setFocus';
import { Transition, animated, Spring } from 'react-spring/renderprops';
import RequestsManager, { requestName } from '../../utils/RequestsManager';

import './styles.css';

export class Node extends React.PureComponent {
    onOpenInfo = () => {
        if(this.props.infoInModal){
            this.props.openModalAction({enrolleeId: this.props.id});
        }
        else {
            window.open(this.props.detailsUrl + this.props.id, '_blank');
        }
    };


    onOpenModal = () => {
        this.props.openModalAction({enrolleeId: this.props.id})
    };

    handleClick = async (nodeId) => {
        this.props.setFocus(nodeId);
        const {
            id, onLoad, showChildren, sourceUrl, numberOfChildren,
            setLoading, setLoaded, children, animate, onToggleChildren
        } = this.props;
        this.props.setLoadMoreIndex(0);
        //hide
        if (showChildren){
            setLoading();
            onToggleChildren(id);
            setLoaded();
            return;
        }

        const childrenLength = children.filter(c => !c.loadMoreNode).length;
        
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];
            let remainingChildren = 0;
            if (childrenLength === 0) {
                const url = sourceUrl + `?id=` + id;
                childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);
                remainingChildren = numberOfChildren - childrenResult.length;
            } else {
                remainingChildren = numberOfChildren - childrenLength;
            }

            if (!childrenResult.errors) {
                if (remainingChildren !== 0){
                    onLoad(id, showChildren, [...childrenResult, {
                        loadMoreNode: true, 
                        offset: numberOfChildren - remainingChildren, 
                        parent: id, 
                        id: 'load_'+ id, 
                        numberOfChildren: remainingChildren 
                    }]);
                }else{
                    onLoad(id, showChildren, childrenResult);
                }
            }
            setLoaded();
        }
    }

    handleLoadMoreClick = async () => {
        const {
            i, id, loadMore, sourceUrl, numberOfChildren,
            setLoading, setLoaded, parent, offset
        } = this.props;
        this.props.setLoadMoreIndex(i);
        if (numberOfChildren > 0) {
            setLoading();
            let childrenResult = [];
            const url = `${sourceUrl}?id=${parent}&offset=${offset}`;
            childrenResult = await RequestsManager(requestName.GET_CHILDREN, url);

            if (!childrenResult.errors) {
                if (childrenResult.length < numberOfChildren){
                    const remainingChildren = numberOfChildren - childrenResult.length;
                    loadMore(parent, [...childrenResult, {
                        loadMoreNode: true, 
                        offset: childrenResult.length + offset, 
                        parent: parent, 
                        id: 'load_'+ parent, 
                        numberOfChildren: remainingChildren 
                    }]);
                }else{
                    loadMore(parent, childrenResult,);
                }
            }
            setLoaded();
        }
    }

    render() {
        const { title, numberOfChildren, loadMoreNode, i, id, focusNode, parent, animate, loadMoreIndex } = this.props;
        const classList = ['Node__Container'];

        if (parent == focusNode) {
            classList.push('focus');
        }

        if (id === focusNode) {
            classList.push('selected');
        }

        if (numberOfChildren === 0) {
            classList.push('disabled');
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
     
        if (animate && focusNode != id && i >= loadMoreIndex ) {
            animationScaleFrom = { opacity: 0, transform: `scale(0.8)`} 
            animationScaleTo = { opacity: 1, transform: `scale(1)`}
            enter={ opacity: 1, transform: `scale(1)`}
        }
        else {
            animationScaleFrom = { opacity: 1,  transform: `scale(1)`}
            animationScaleTo = { opacity: 1, transform: `scale(1)`} 
            enter={ opacity: 1, transform: `scale(1)`}
        }

        let content;

        if(!loadMoreNode) {
            content = <Transition
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
            
        } else {
            content = <Transition
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
                            <div onClick={() => this.handleLoadMoreClick()} className="LoadMoreNode__Title">
                                <span>Load More</span>
                            </div>
                        </div>
                    </animated.div>
                ))}
            </Transition>
        }
     
        console.log(this.props.loadMoreIndex);

        return content;
    }
}

export const nodeProps = {
    id: PropTypes.string.isRequired,
    loadMoreNode: PropTypes.bool,
    offset: PropTypes.number,
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
    (state) => ({        
        sourceUrl: state.variables.sourceUrl,
        detailsUrl: state.variables.detailsUrl,
        infoInModal: state.variables.inModal,
        focusNode: state.variables.focusNode,
        loadMoreIndex: state.variables.loadMoreIndex,
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
        unmarkChildren: (id) => dispatch(unmarkChildren(id)) ,
        onToggleChildren: (id) => dispatch(toggleChildren(id)),
        loadMore: (id, children) => dispatch(loadChildren(id, children)),
        setLoading: () => dispatch(setLoadingAction()) ,
        setLoaded: () => dispatch(setLoadedAction()) ,
        openModalAction: (enrolleeId) => dispatch(openModalAction(enrolleeId)),
        setFocus: (id) => dispatch(setFocus(id)),
        setLoadMoreIndex: (i) => dispatch(setLoadMoreIndex(i)),
    }),
)(Node);