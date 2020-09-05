import * as React from 'react';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import { Switch, Route, useParams } from 'react-router-dom';
import { NoteModel } from 'models/NoteModel';
import NoteItem from '../components/NoteItem';
import { useState, useEffect } from 'react';

function NoNote() {
    return (
        <div className="App-NoNote">please select a note</div>
    )
}

export interface NotesContainerProps {
    notes: NoteModel[],
}
 
export interface NotesContainerState {
    notes: NoteModel[],
}

class NotesContainer extends React.Component<NotesContainerProps, NotesContainerState> {
    state = {
        notes: this.props.notes
    }

    editNote(edited: NoteModel) {
        const index = this.state.notes.findIndex(e => e.id === edited.id);
        let newNotes = [...this.state.notes];
        newNotes[index] = edited;
        this.setState({ notes: newNotes });
    }

    render() {
        return (
            <React.Fragment>
                <LeftPane>
                    <NoteList notes={this.state.notes}/>
                </LeftPane>
                <RightPane>
                    <Switch>
                        <Route path="/:id" render={(props) => <Child {...props} notes={this.state.notes}
                            onSaveNote={(edited: NoteModel) => this.editNote(edited)} />} />
                        <Route path="*">
                            <NoNote />
                        </Route>
                    </Switch>
                </RightPane>
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
        setNote(findNote(note.id));
    }, [props.notes]);

    return (
        <NoteItem note={note}
            onSaveNote={(edited: NoteModel) => props.onSaveNote(edited)}
        />
    );
}  
 
export default NotesContainer;