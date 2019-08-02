import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

const Directory = ({ sections }) => {
    // console.log("the sections are ", sections)
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory)