import React, {Profiler} from 'react'

function withProfiler(WrappedComponent, id="") {
    class WithProfiler extends React.Component {
        constructor(props) {
            super(props);
        };

        onRender = (...data) => {
            console.log(`ID: ${id}: data: `, data)
        }

        render() {
            return (
                <Profiler id={id} onRender={this.onRender}>
                    <WrappedComponent {...this.props}/>
                </Profiler>
            )
        }
    }
    WithProfiler.displayName = `WithProfiler(${getDisplayName(WrappedComponent)})`;
    
    return WithProfiler;
  }

export default withProfiler;
  
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}