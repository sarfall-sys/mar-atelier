import React from 'react'
import DataLoader from '../utils/dataLoader';
function Services() {
  const services = DataLoader.getServices();
  return (
    <div>Services</div>
  )
}

export default Services