import React from "react";
import ReactDOM from "react-dom";

export const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props)
            this.state = {label: "Run"}
            this.state.handleClick = this.handleClick.bind(this)
        }
        getUrl() {
            return "https://facebook.github.io/react/docs/top-level-api.html"
        }
        handleClick(event) {
            var iframe = document.getElementById("frame").src = this.getUrl()
        }
        componentDidMount() {
            console.log("componentDidMount - " + ReactDOM.findDOMNode(this))
        }
        render() {
            console.log(this.state)
            return <Component {...this.state} {...this.props} />
        }
    }
    _LoadWebsite.dispalyName = "EnhancedComponent"
    return _LoadWebsite
}