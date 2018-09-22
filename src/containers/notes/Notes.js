import React, {Component} from 'react';
import Note from '../../components/note/Note';
import '../../components/note/note.css';
import {connect} from 'react-redux';

class Notes extends Component {
    render(){
        return(
            <div className="container">

                {this.props.noteList.map(note => {
                   return <Note
                       textInp={note.text}
                       key={note.id}
                       deleteNote={() => this.props.deleteNote(note.id)}/>

                })}
                <button onClick={this.props.addNote} className="addButton">+</button>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        noteList: state.notes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: () => dispatch({type:"ADD_NOTE"}),
        deleteNote: (nid) => dispatch({type:"DEL_NOTE", id: nid})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
