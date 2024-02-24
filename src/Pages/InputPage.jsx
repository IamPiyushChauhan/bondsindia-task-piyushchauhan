import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
const InputPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(formData));
    
    setFormData({
      title: '',
      category: '',
      description: '',
      date: '',
    });

    navigate('/data')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <label>Category:</label>
      <input type="text" name="category" value={formData.category} onChange={handleChange} />
      <label>Description:</label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputPage;
