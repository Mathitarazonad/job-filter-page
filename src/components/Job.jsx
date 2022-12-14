import React from 'react';
import { VscDebugStackframeDot } from 'react-icons/vsc';

function Job (props) {
  return(
    <div className={props.isFeatured ? 'job featured-job' : 'job'} id={props.id}>
      
      <div className='job-info-container'>
        <img src={props.companyLogo} alt='company-logo' className='company-logo'></img>
        <div className='job-description'>
          <div className='job-header'>
            <h3 className='company-name'>{props.companyName}</h3>
            <div className=
            'other-tags' style={{display: props.isNew || props.isFeatured ? 'flex' : 'none'}}>
              <h4 
              className='new-tag' 
              style={{display: props.isNew ? 'initial' : 'none'}}>
                NEW!
              </h4>
              <h4
                className='featured-tag' 
                style={{display: props.isFeatured ? 'flex' : 'none'}}>
                  FEATURED
              </h4>
            </div>
          </div>
          <h2 className='company-job'>{props.companyJob}</h2>
          <div className='job-details'>
            <h5>{props.post}</h5>
            <VscDebugStackframeDot />
            <h5>{props.workTime}</h5>
            <VscDebugStackframeDot />
            <h5>{props.jobLocation}</h5>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='job-tags'>
        <h3 className='tag' onClick={ () => props.addSelectedTag(props.jobRole)}>{props.jobRole}</h3>
        <h3 className='tag' onClick={ () => props.addSelectedTag(props.jobLevel)}>{props.jobLevel}</h3>
        {props.jobLangs.map(lang => {
          return (<h3 className='tag'key={lang} onClick={ () => props.addSelectedTag(lang)}>{lang}</h3>)
        })}
        {props.jobTools.map(tool => {
          return (<h3 className='tag'key={tool} onClick={ () => props.addSelectedTag(tool)}>{tool}</h3>)
        })}
      </div>
    </div>
  );
}

export default Job;