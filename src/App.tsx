import React from 'react';
import STYLES from './app.module.scss';
import { JavelinBuilder } from './components/javelin-builder';

export const App = () => (
  <div className={STYLES.app}>
    <JavelinBuilder />
  </div>
)
