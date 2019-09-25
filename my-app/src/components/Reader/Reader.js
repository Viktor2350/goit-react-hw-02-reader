import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'prev') {
      this.setState(state => ({
        index: state.index - 1,
      }));
    } else if (name === 'next') {
      this.setState(state => ({
        index: state.index + 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className={styles.reader}>
        <Publication
          title={items[index].title}
          text={items[index].text}
          id={items[index].id}
        />
        <p className={styles.counter}>{index + 1}/12</p>
        <Controls handleClick={this.handleClick} index={index} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
