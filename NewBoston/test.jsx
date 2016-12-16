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

ReactDOM.render(

    <div>
        <Movie title="Avatar" genre="Action" />
        <Movie title="The Notebook" genre="Romance" />
        <Movie title="Captain America" genre="Action" />
    </div>
    , document.getElementById('example'));

var comment = React.createClass({
        edit: function() {
            alert('Editing comment');
        },
        remove: function() {
            alert('Removing comment');
        },

        render: function () {
            return (
                <div className="commentContainer">
                    <div className="commentText">Text of whatever</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
            );
        }
    }
);
