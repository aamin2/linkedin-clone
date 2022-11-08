import React from 'react'
import  "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) =>(
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
      <FiberManualRecordIcon/>
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
      <h2>Linkedin News</h2>
      <InfoIcon/>
      </div>
      {newsArticle("React.js is the next best thing", 'Top news - 9807 readers')}
      {newsArticle("Elon Musk takes over twitter", 'Top news - 768 readers')}
      {newsArticle("MonkeyPox updates", 'Health - 823 readers')}
      {newsArticle("Crypto market crashing", 'Finances - 6873 readers')}
      {newsArticle("Midterm elections ", 'Politics - 9807 readers')}
      {newsArticle("Russia .VS. Ukraine updates", 'Top news - 11235 readers')}
    </div>
    
  )
}

export default Widgets