import React from 'react';
import './note.css';


const note = (props) => {
    return (
        <div className="note">
          <textarea className="textBox">
          </textarea>
            <button className="noteButton" onClick={props.deleteNote}>Delete</button>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        noteList: state.notes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: dispatch({type:"DEL_NOTE"})
    }
}

export default note;