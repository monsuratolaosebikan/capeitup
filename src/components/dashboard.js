import React, { Component } from 'react';
import axios from 'axios';
import SkillCard from './skillcard';
import { Card, Input } from 'semantic-ui-react'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state =  {skills: null, username: ''}
    }

    handleKeyPress(target) {
        if(target.charCode === 13) {
            this.search(this.state.username,this.renderCards.bind(this));
        }
    }

    search(username, func) {
        axios.get(`https://apps.runescape.com/runemetrics/profile?user=${encodeURI(username)}&activities=0`)
            .then(res => {
                console.log(JSON.stringify(res.data));
                func(res.data.skillvalues);
            });
    }

    renderCards(skills) {
        let skillCards =  skills.map(function(skill) {
            return (
                <SkillCard id={skill.id} level={skill.level} xp={Math.floor(skill.xp / 1000000) + 'M'}>
                    <p>{skill.id}</p>
                </SkillCard>
            )
        });

        this.setState({skills : skillCards})
    }

    render() {
        return (
            <div className="dashboard">
                <Input
                    size="massive"
                    fluid icon='search'
                    placeholder='Runescape username...'
                    spellCheck="false"
                    value={this.state.username}
                    onChange={event => this.setState({username: event.target.value})}
                    onKeyPress={this.handleKeyPress.bind(this)}/>
                <br/>
                <Card.Group itemsPerRow={5}>
                {this.state.skills ? this.state.skills : null}
                </Card.Group>
            </div>
        )
    }
}

export default Dashboard;