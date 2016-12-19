var Bacon = React.createClass({

    render: function() {
        return (
            <div>
            <h2>This is a heading</h2>
        <p>And this is is a sample paragraph</p>
        </div>
        );
    }

});

var Bradley = React.createClass({

    render: function() {
        return (
            <div>
                <h2>This is a heading</h2>
                <p>And this is a sample paragraph</p>
            </div>
        )
    }
});

var Movie = React.createClass({

    render: function() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.genre}</h2>
            </div>
        )
    }
});

//ReactDOM.render(
//
//    <div>
//        <Movie title="Avatar" genre="Action" />
//        <Movie title="The Notebook" genre="Romance" />
//        <Movie title="Captain America" genre="Action" />
//    </div>
//    , document.getElementById('example'));

//var Comment = React.createClass({
//        edit: function() {
//            alert('Editing comment');
//        },
//        remove: function() {
//            alert('Removing comment');
//        },
//
//        render: function () {
//            return (
//                <div className="commentContainer">
//                    <div className="commentText">{this.props.children}</div>
//                    <button onClick={this.edit} className="button-primary">Edit</button>
//                    <button onClick={this.remove} className="button-danger">Remove</button>
//                </div>
//            );
//        }
//    }
//);

//ReactDOM.render(
//    <div className="board">
//        <Comment>Hey now</Comment>
//        <Comment>This is pretty cool</Comment>
//        <Comment>Yup, I like it</Comment>
//    </div>,
//    document.getElementById('container')
//);

//var CheckBox = React.createClass({
//
//        getInitialState: function() {
//            return {checked: true};
//        },
//
//        handleChecked: function() {
//            this.setState({checked: !this.state.checked});
//        },
//
//        render: function () {
//        var msg;
//
//        if(this.state.checked) {
//            msg = 'checked';
//        } else {
//            msg = 'unchecked';
//        }
//
//        return (
//            <div>
//                <input type="checkbox" onChange={this.handleChecked/} defaultChecked={this.state.checked} />
//                <h3>Checkbox is {msg}</h3>
//            </div>
//        );
//
//    }
//});
//
//ReactDOM.render(
//    //<div>Test</div>,
//    <CheckBox />,
//    document.getElementById('container')
//);


var Comment = React.createClass({
        getInitialState: function() {
            return {editing: false};
        },

        edit: function() {
            this.setState({editing: true})
        },
        remove: function() {
            console.log('Removing comment');
            this.props.deleteFromBoard(this.props.index);
        },

        save: function() {
            var val = this.refs.newText.value;
            console.log('New text: ' + val);
            this.props.updateCommentText(val, this.props.index);
            this.setState({editing: false})
        },

        renderNormal: function() {
            return (
                <div className="commentContainer">
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
            );
        },

        renderForm: function() {
            return (
                <div className="commentContainer">
                    <textarea ref="newText" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="button-success">Save</button>
                </div>
            );
        },

        render: function () {
            if(this.state.editing) {
                return this.renderForm();
            } else {
                return this.renderNormal();
            }
        }
    });

var Board = React.createClass({

    getInitialState: function() {
        return {
            comments: [
                'I like ReactJS',
                'I might actually want a job',
                "I think I'm pretty hireable"
            ]
        }
    },

    addComment: function(text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments: arr});
    },

    removeComment: function(i) {
        console.log('Removing comment: ' + i);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments: arr});
    },

    updateComment: function(newText, i) {
        console.log('Updating comment: ' + i);
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
    },

    eachComment: function(text, i) {
        return(
            <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                {text}
            </Comment>
        )
    },

    render: function() {
        return (
            <div>
                <button onClick={this.addComment.bind(null, 'I am awesome')} className="button-info create">Add New Comment</button>
                <div className="board">
                    {
                        this.state.comments.map(this.eachComment)
                    }
                </div>
            </div>

        )
    }

});

ReactDOM.render(
    <Board />,
    document.getElementById('container')
);
