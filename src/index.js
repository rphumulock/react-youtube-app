import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTAPIS from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import SearchBar from './components/search_bar';
import _ from 'lodash';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

const APIKEY = 'AIzaSyDnZyJJvIr3Zx4VzEj8jgLMlgOXx4LO3CU';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            that: this
        };

        this.debounceSearch = _.debounce((term) => { this.search(term) }, 500).bind(this);
        this.debounceSearch();
    }

    search(term) {
        YTAPIS({ key: APIKEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <SearchBar onInputChange={(input) => this.debounceSearch(input)} />
                </div>
                <div className="row">
                    <VideoDetails video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={(selectedVideo) => {
                            this.setState({ selectedVideo });
                        }}
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));