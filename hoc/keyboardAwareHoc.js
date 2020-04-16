import React from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Keyboard,
  Platform,
} from 'react-native';

const KeyboardAvoidingHoc = (Comp) => {
  return class KeyboardAware extends React.Component {
    state = {keyboardOn: false};

    componentDidMount = () => {
      this.keyboardWillShowListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow ',
        (event) => {
          this.setState({keyboardOn: true});
        },
      );

      this.keyboardWillHideListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide ',
        (event) => {
          this.setState({keyboardOn: false});
        },
      );
    };

    componentDidUpdate = (prevProps, prevState) => {
      // LayoutAnimation.easeInEaseOut();
    };
    componentWillUnmount = () => {
      this.keyboardWillShowListener && this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener && this.keyboardWillHideListener.remove();
    };

    render = () => {
      const {
        styleDuringKeyboardShow,
        style,
        children,
        hideOnKeyboard,
        ...props
      } = this.props;
      return (
        <Comp
          style={[style, this.state.keyboardOn && styleDuringKeyboardShow]}
          {...props}>
          {children}
        </Comp>
      );
    };
  };
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#0005',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KeyboardAvoidingHoc;
