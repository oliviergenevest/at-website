import React, { PureComponent } from 'react'
import { Transition as SpringTransition, animated } from 'react-spring'

class Transition extends PureComponent {
  render() {
    return (
      <SpringTransition
        items={[this.props]}
        keys={props => props.location.pathname}
        native
        from={{ opacity: 0, transform: 'translate3d(60px)' }}
        enter={{ opacity: 1, transform: 'translate3d(0px)' }}
        leave={{ opacity: 0, transform: 'translate3d(30px)' }}
      >
        {({ pathname, children }) => props => (
          <animated.div key={pathname} style={{ ...props, position: 'relative', overflow:'hidden' }}>
            {children}
          </animated.div>
        )}
      </SpringTransition>
    )
  }
}

export default Transition