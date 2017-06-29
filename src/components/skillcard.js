import React, { Component } from 'react';
import { Statistic, Card, Image } from 'semantic-ui-react'

class SkillCard extends Component {

    render() {

        let { id, level, xp, profit_loss, days } = this.props;
        let skillName = skills[id].name;
        let skillImage = skills[id].img;

        return (
            <Card>
                <Card.Content header={skillName} />
                <Card.Content>
                    <img className="skill" src={skillImage}/>
                </Card.Content>
                <Card.Content extra>
                    <Statistic value={level} color='green' label='Level' size="mini"/>
                    <Statistic value={xp} color='green' label='XP/day' size="mini"/>
                    <Statistic value='-3,678' color='red' label='profit/loss' size="mini"/>
                </Card.Content>
                <Card.Content extra>
                    <Statistic value='30' horizontal label='days' size="mini"/>
                </Card.Content>
                <Card.Content extra>
                    <Statistic>
                        <Statistic.Value>
                            <Image src='http://vignette3.wikia.nocookie.net/runescape2/images/5/5e/Bond_concept_art.png/revision/latest?cb=20130925160411' inline shape='circular' />
                        </Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>
                            <Image src='https://vignette4.wikia.nocookie.net/runescape2/images/0/08/Jack_of_trades_aura_detail.png/revision/latest?cb=20160920163036' inline shape='circular' />
                        </Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>
                            <Image src='https://vignette2.wikia.nocookie.net/runescape2/images/1/12/Warbands_emblem.png/revision/latest/scale-to-width-down/80?cb=20170121201042' inline shape='circular' />
                        </Statistic.Value>
                    </Statistic>
                </Card.Content>
            </Card>
        )
    }
}

const skills = {
    0: {name: 'Attack', img:'http://www.maxcape.com/images/attack.png'},
    1: {name: 'Defense', img: 'http://www.maxcape.com/images/defence.png'},
    2: {name:'Strength', img:'http://www.maxcape.com/images/strength.png'},
    3: {name:'Constitution',img:'http://www.maxcape.com/images/constitution.png'},
    4: {name:'Ranged',img:'http://www.maxcape.com/images/ranged.png'},
    5: {name:'Prayer',img:'http://www.maxcape.com/images/prayer.png'},
    6: {name:'Magic',img:'http://www.maxcape.com/images/magic.png'},
    7: {name:'Cooking',img:'http://www.maxcape.com/images/cooking.png'},
    8: {name:'Woodcutting',img:'http://www.maxcape.com/images/woodcutting.png'},
    9: {name:'Fletching',img:'http://www.maxcape.com/images/fletching.png'},
    10: {name:'Fishing',img:'http://www.maxcape.com/images/fishing.png'},
    11:{name:'Firemaking',img:'http://www.maxcape.com/images/firemaking.png'},
    12: {name:'Crafting',img:'http://www.maxcape.com/images/crafting.png'},
    13: {name:'Smithing',img:'http://www.maxcape.com/images/smithing.png'},
    14: {name:'Mining',img:'http://www.maxcape.com/images/mining.png'},
    15: {name:'Herblore',img:'http://www.maxcape.com/images/herblore.png'},
    16: {name:'Agility',img:'http://www.maxcape.com/images/agility.png'},
    17: {name:'Thieving',img:'http://www.maxcape.com/images/thieving.png'},
    18: {name:'Slayer',img:'http://www.maxcape.com/images/slayer.png'},
    19: {name:'Farming',img:'http://www.maxcape.com/images/farming.png'},
    20: {name:'Runecrafting',img:'http://www.maxcape.com/images/runecrafting.png'},
    21: {name:'Hunter',img:'http://www.maxcape.com/images/hunter.png'},
    22: {name:'Construction',img:'http://www.maxcape.com/images/construction.png'},
    23: {name:'Summoning',img:'http://www.maxcape.com/images/summoning.png'},
    24: {name:'Dungeoneering',img:'http://www.maxcape.com/images/dungeoneering.png'},
    25: {name:'Divination',img:'http://www.maxcape.com/images/divination.png'},
    26: {name:'Invention', img:'http://www.maxcape.com/images/invention.png'},
};


export default SkillCard;