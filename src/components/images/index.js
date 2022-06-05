import {useState,forwardRef} from 'react'
import styles from './Image.module.scss'
import images from '~/assets/images'
import classNames from 'classnames'
const Image = forwardRef(({src,alt,className,fallback:customFallBack=images.noImage,...props},ref) =>{
    const [fallback,setFallBack] = useState('')
    const handleErr = ()=>{
        setFallBack(customFallBack)
    }
    return ( 
        <img ref={ref} className={classNames(styles.wrapper,className)} src={fallback||src} alt={alt} {...props} onError={handleErr}/>
     );
})
export default Image;