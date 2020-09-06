import * as React from 'react';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import { Switch, Route, useParams, withRouter, RouteComponentProps } from 'react-router-dom';
import { NoteModel } from 'models/NoteModel';
import NoteItem from '../components/NoteItem';
import { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Header from 'components/Header';
import CSS from 'csstype';

const styleContainer: CSS.Properties = {
    display: 'flex',
}

function NoNote() {
    return (
        <div>please select a note</div>
    )
}

export interface NotesContainerProps extends RouteComponentProps<any> {
    notes: NoteModel[],
}
 
export interface NotesContainerState {
    notes: NoteModel[],
    editing: boolean,
}

class NotesContainer extends React.Component<NotesContainerProps, NotesContainerState> {
    state = {
        notes: this.props.notes,
        editing: false,
    }

    editNote(edited: NoteModel) {
        const index = this.state.notes.findIndex((e: NoteModel) => e.id === edited.id);
        let newNotes = [...this.state.notes];
        newNotes[index] = edited;
        this.setState({ editing: false });
        this.setState({ notes: newNotes });
    }

    deleteNote(deleting: NoteModel) {
        let newNotes = [...this.state.notes];
        newNotes = newNotes.filter((e: NoteModel) => e.id !== deleting.id);
        this.setState({ editing: false });
        this.setState({ notes: newNotes }, () => {
            this.props.history.push('/');
        });
    }

    addNote() {
        let newNotes = [...this.state.notes];
        const created = { id: uuidv1(), title: 'new', text: 'try markdown' };
        newNotes.push(created);
        this.setState({ notes: newNotes }, () => {
            this.props.history.push(`/${created.id}`);
        });
    }

    isEditing(editing: boolean) {
        this.setState({ editing });
    }

    render() {
        return (
            <React.Fragment>
                <Header onAddNote={() => this.addNote()} disabled={this.state.editing}/>
                <div style={styleContainer}>
                    <LeftPane>              
                        <NoteList notes={this.state.notes} disabled={this.state.editing}/>
                    </LeftPane>
                    <RightPane>
                        <Switch>
                            <Route path="/:id" render={(props) => 
                                <Child {...props}
                                    notes={this.state.notes}
                                    onSaveNote={(edited: NoteModel) => this.editNote(edited)}
                                    onDeleteNote={(deleting: NoteModel) => this.deleteNote(deleting)}
                                    onEditing={(editing: boolean) => this.isEditing(editing)}
                                />}
                            />
                            <Route path="*">
                                <NoNote />
                            </Route>
                        </Switch>
                    </RightPane>    
                </div>
            </React.Fragment>
        );
    }
}

function Child(props: any) {
    let { id } = useParams();

    const [note, setNote] = useState(
        props.notes.find((n: NoteModel) => n.id === id)
    );

    const findNote = (id: string): NoteModel => {
        return props.notes.find((n: NoteModel) => n.id === id);
    }

    useEffect(() => {
        setNote(findNote(props.match.params.id));
    }, [props.match.params.id]);

    useEffect(() => {
        setNote(findNote(note ? note.id : null));
    }, [props.notes, note]);

    if (note) {
        return (
            <NoteItem note={note}
                onSaveNote={(edited: NoteModel) => props.onSaveNote(edited)}
                onDeleteNote={(deleting: NoteModel) => props.onDeleteNote(deleting)}
                onEditing={(editing: boolean) => props.onEditing(editing)}
            />
        )
    }
    return <NoNote />
}  
 
export default withRouter(NotesContainer);