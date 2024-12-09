import React from "react";

const Avatar = props =>{
    return(
        <img src={props.AvatarIcon} alt={props.AvatarAlt} styles={styles.Avatar} />
    )
}

export default Avatar

const styles = {
    Avatar:{
        height:'75px',
        cursor:'pointer',
        borderRadius:'50%'
    }
}