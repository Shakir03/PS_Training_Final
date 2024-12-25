import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { getCamleCaseString } from '../../../constants/pokemon.types';
import ColorfulTag from '../colorfulTags/colorfulTag';
import "./propertyCard.scss";
import "../../../styles/common.scss";
import PropTypes from 'prop-types';

const PropertyCard = ({ speciesData, data, pokemonTypeData }) => {
  return (
    <div className="property-container">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Height</span></div>
              <div className='prop-header-data'>{data.height}</div>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Weight</span></div>
              <div className='prop-header-data'>{data.weight / 10} Kg</div>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Gender(s)</span></div>
              <div className='prop-header-data'>Male, Female</div>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Egg Groups</span></div>
              {speciesData.egg_groups.length && (speciesData.egg_groups.map((item, index) => (<span key={item.name} className='prop-header-data'>{getCamleCaseString(item.name)}
                {speciesData.egg_groups.length !== index + 1 && (<span>,</span>)}
              </span>)))}
            </div>
          </Col>
        </Row>
        <Row className="show-grid pt-3">
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Abilities</span></div>
              {data.abilities.length && (data.abilities.map((item, index) => (<span key={item.ability.name} className='prop-header-data'>{getCamleCaseString(item.ability.name)}
                {data.abilities.length !== index + 1 && (<span>,</span>)}
              </span>)))}
            </div>
          </Col>
          <Col xs={12} sm={12} lg={6} xl={6}>
            <div className='flex-col'>
              <div><span className="prop-header">Types</span></div>
              <div className='prop-header-data'>
                <div className='type-wrap'>
                  {data.types.length && (data.types.map((item,index) => (
                    <ColorfulTag className="pr-1" key={item.type.name+index} type={item.type.name} text={getCamleCaseString(item.type.name)} />
                  )))}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <div className='flex-col'>
              <div><span className="prop-header">Weak Against</span></div>
              <div className='prop-header-data type-wrap'>
                {pokemonTypeData.damage_relations.double_damage_from.length && (pokemonTypeData.damage_relations.double_damage_from.map((item, index) => (
                  <ColorfulTag key={item.name+index} className="pr-1" type={item.name} text={getCamleCaseString(item.name)} />
                )))}
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

PropertyCard.propTypes = {
  speciesData: PropTypes.object,
  data: PropTypes.object,
  pokemonTypeData: PropTypes.object,
}

export default PropertyCard;