import './directory.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sections: SECTIONS_DATA
        }
    }

  render(){
      const { sections }=this.state;
    return (
        <div className="directory-menu">
               {
                sections.map(({title, imageUrl, id, linkUrl}) => 
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl}/>
                    )
                }
           </div>
   );
  }
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
