import React from 'react';
import Layout from './layout';
import Flex from './flex';

let Header = React.createClass({
    render(){
        return (
            <Layout className="header-nav">
                <Flex className="header-nav-left-container">
                    {this.props.left ? this.props.left : (
                        <div className="header-nav-left" onClick={this.handleBack}>
                            <i className="ifont ifont-left"></i>
                        </div>
                    )}
                </Flex>
                <Flex flex className="text-center">
                    <div>{this.props.title}</div>
                </Flex>
                <Flex className="text-right header-nav-right-container">
                    {this.props.right ? this.props.right : undefined}
                </Flex>
            </Layout>
        );
    },
    handleBack(event){
        event.stopPropagation();
        event.preventDefault();

        if (this.props.history) {
            this.props.history.go(-1);
        }
    }
});

export default Header;