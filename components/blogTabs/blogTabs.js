import React, { useState } from 'react';
import {AllBlogs} from './allBlogs';
import styles from './index.module.css'
export function BlogTab () {
  return (
    <div className={styles.Tab}>
       <AllBlogs/> 
    </div>
   
  );
}

