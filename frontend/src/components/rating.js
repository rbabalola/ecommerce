import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarHalfIcon from '@material-ui/icons/StarHalf';
// import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {
    // {value, text} this is pass in as a prop from product.js and destructured instead od writing this word props in the bracket, they both work though.
    return (
        <div>
            <span>
            {value >= 1 ? <StarIcon style={{color}}/> : value <= 1 ? <StarHalfIcon style={{color}}/> : <StarOutlineIcon style={{color}}/>}  
            <span>
            {value >= 2 ? <StarIcon style={{color}}/> : value >= 1.5 ? <StarHalfIcon style={{color}}/> : <StarOutlineIcon style={{color}}/> }
            </span>
            <span>
            {value >= 3 ? <StarIcon style={{color}}/> : value >= 2.5 ? <StarHalfIcon style={{color}}/> : <StarOutlineIcon style={{color}}/> }  
            </span>
            <span>
            {value >= 4 ? <StarIcon style={{color}}/> : value >= 3.5 ? <StarHalfIcon style={{color}}/> : <StarOutlineIcon style={{color}}/> }   
            </span>
            <span>
            {value >= 5 ? <StarIcon style={{color}}/> : value >= 4.5 ? <StarHalfIcon style={{color}}/> : <StarOutlineIcon style={{color}}/> }   
            </span>
            <span> {text && text} </span> 
            </span>
          
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}
// Rating.propTypes ={
//     value: PropTypes.number.isRequired, 
//     value: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
// }

// Rating.propTypes just crosschecks out rating so that the proper  data Type is passed in.

export default Rating;
