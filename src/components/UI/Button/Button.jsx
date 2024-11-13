

import './button.scss'

export default function Button({title, className,  ... props}) {
 

  
  return (
    <button  className={`${className} btn`}  {...props}>{title}</button>
  )
}
