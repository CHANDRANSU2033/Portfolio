import React from 'react'
import styles from './Experience.module.css'
import { getImageUrl } from '../../utils'
import skills from '../../data/skills.json'
import history from '../../data/history.json'

const Experience = () => {
  return (
    <section className={styles.container} id='expirence'>
      <h2 className={styles.title}>experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {
            skills.map((skill, id) =>{
              return(
                <div key= {id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>)
            })
          }
          </div>
            <ul className={styles.history}>
              {
                history.map((historyItem, Id) =>{
                  return(
                    <li key = {Id} className={styles.historyItem}>
                      <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
                      <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                        <ul>{historyItem.experiences.map((experience,id)=>{
                          return(
                            <li key={id}>{experience}</li>
                          )
                        })}</ul>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          
      </div>
    </section>
  )
}

export default Experience