import * as React from 'react';
import NoteList from 'components/NoteList';
import { RightPane } from 'components/RightPane';
import { LeftPane } from 'components/LeftPane';
import { Switch, Route, useParams } from 'react-router-dom';
import { NoteModel } from 'models/NoteModel';
import NoteItem from '../components/NoteItem';
import { useState, useEffect, useRef } from 'react';

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

    componentDidUpdate(prevProps: NotesContainerProps) {
        if (prevProps.notes !== this.props.notes) {
            this.setState({notes: this.props.notes});
        }
    }

    editNote(edited: NoteModel) {
        const index = this.state.notes.findIndex((e: NoteModel) => e.id === edited.id);
        let newNotes = [...this.state.notes];
        newNotes[index] = edited;
        this.setState({ notes: newNotes });
    }

    deleteNote(deleting: NoteModel) {
        let newNotes = [...this.state.notes];
        newNotes = newNotes.filter((e: NoteModel) => e.id !== deleting.id);
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
                        <Route path="/:id" render={(props) => 
                            <Child {...props} notes={this.state.notes}
                                onSaveNote={(edited: NoteModel) => this.editNote(edited)}
                                onDeleteNote={(deleting: NoteModel) => this.deleteNote(deleting)}
                            />}
                        />
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

    const usePrevious = (value: any): any => {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
    }

    useEffect(() => {
        setNote(findNote(props.match.params.id));
    }, [props.match.params.id]);

    const prevNotes: NoteModel[] = usePrevious(props.notes);

    useEffect(() => {
        console.log('useEffect notes', note, prevNotes, props.notes);
        if (prevNotes && (props.notes.length === (prevNotes.length + 1))) {
            // we added a new note, we need to change history
            props.history.push(`/${[...props.notes].pop().id}`);
        } else if (!note) {
            props.history.push('/');
        } else {
            setNote(findNote(note ? note.id : null));
        }
    }, [props.notes, note]);

    if (note) {
        return (
            <NoteItem note={note}
                onSaveNote={(edited: NoteModel) => props.onSaveNote(edited)}
                onDeleteNote={(deleting: NoteModel) => props.onDeleteNote(deleting)}
            />
        )
    }
    return <NoNote />
}  
 
export default NotesContainer;