import React from 'react';
import styles from './menu.module.css';
import { Box, Button } from '@mui/material';

const SelectedMenu = ({ selectedMenu, foodSections }) => {
    return (
        <Box
        className={styles.backgroundImage}
        style={{
            backgroundImage:
                'url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80)',
        }}>
        <div className={styles.dishSection}>
            {foodSections.find(section => section.label === selectedMenu).dishes.map(dish => (
                <div className={styles.dishContainer} key={dish.label}>
                    <img className={styles.dishImg} src={dish.image} alt={dish.label} />
                    <p className={styles.dishTitle}>{dish.label}</p>
                    <div className={styles.dishInfoSection}>
                    <p className={styles.dishInfo}>{dish.weight}</p>
                    <p className={styles.dishInfo}>{dish.price}</p>
                    </div>

                    <div className={styles.dishBtnSection}>
                        <Button className={styles.dishBtn}
                        variant='contained'
                        >Коментар</Button>
                        
                        <Button className={styles.dishBtn}
                        variant='contained'
                        >Добави</Button>
                    </div>
                </div>
            ))}
        </div>
        </Box>
    );
};

export default SelectedMenu;
