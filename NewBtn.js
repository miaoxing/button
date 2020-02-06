import React from 'react';
import BtnLink from './BtnLink';

export default ({href, children, ...props}) => (
  <BtnLink to={href} variant="success" {...props}>{children || '添加'}</BtnLink>
)
