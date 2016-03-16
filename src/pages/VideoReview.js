import React from 'react'

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import Paper from 'material-ui/lib/paper';

import CourseModuleInfo from '../components/CourseModuleInfo';
import CourseModuleExperiment from '../components/CourseModuleExperiment';
import CourseModuleReflection from '../components/Video';

import Video from '../components/Video';

const {Grid, Row, Col} = require('react-flexgrid');

var pageContainerStyle = {
  margin:'32px 20px'
}

var courseContainerStyle = {
  background: 'white',
  marginTop: '32px'
};

var moduleNumStyle = {
  color: '#888888',
  marginTop: '0px',
  marginBottom: '10px'
}

var moduleNameStyle = {
  marginTop: '0px',
  marginBottom: '0px'

}

var paddingStyle = {
  padding: '32px'
}

var marginStyle = {
  margin: '32px'
}

var iconStyle = {
  color : 'black'
}

const VideoReview = React.createClass({

  render: function() {
    let { query } = this.props.location;
    let videoUuid = query && query.uuid ? query.uuid : '';

    console.log("Video UUID:", videoUuid);

    return (
      <div style={pageContainerStyle}>
        <Row>
          <Col xs={0} sm={0} md={2} lg={2}/>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Paper style={courseContainerStyle}>
              <div style={paddingStyle}>
                <h4 style={moduleNumStyle}>Anmeld video</h4>
                <h1 style={moduleNameStyle}>Hvad synes du om Mikkels præsentation?</h1>
              </div>
              <div style={paddingStyle} >
                <div>
                  <video id='friendsVideoPresentation' data-uuid={videoUuid}></video>
                </div>
                <div style={{marginTop: 100}}>
                  <TextField
                    hintText="Din anmeldelse"
                    floatingLabelText="Skriv anmeldelse"
                    multiLine={true}
                    rows={5}
                  />
                </div>
                <div style={{textAlign: 'center', marginTop: 50}}>
                  <RaisedButton label="Afsend" primary={true} />
                </div>
              </div>
            </Paper>
          </Col>
          <Col xs={0} sm={0} md={2} lg={2}/>
        </Row>
      </div>
    )
  }
});

export default VideoReview
