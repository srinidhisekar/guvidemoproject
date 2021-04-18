import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AC_VIEW_DATA} from '../action/characteraction';
class  ViewCharacter extends React.Component {
  componentDidMount() {

    this.props.ViewCharacter();
  }
  render() {
   const list  = this.props.CharacterReducer.List;
   const id = this.props.match.params.id;
   var CharacterFormData={};
    for(var i=0;i<list.length;i++)
    {
      if(id==list[i].char_id)
      {
         CharacterFormData = {
              char_id  :list[i].char_id,
              name     : list[i].name,
              birthday     : list[i].birthday,
              img      : list[i].img,
              occupation     : list[i].occupation,
              status     : list[i].status,
              nickname     : list[i].nickname,
              appearance     : list[i].appearance,
              portrayed     : list[i].portrayed,
              category     : list[i].category,
              better_call_saul_appearance     : list[i].better_call_saul_appearance,

            }
            console.log("data",CharacterFormData);
      }
    }
      return(
        <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3">
                      <h4 className="card-title">View Character</h4><br/>
                        <div className="form-group">
                          <label>Character id</label>
                          <input type="text" className="form-control" name="Category"  value={CharacterFormData.char_id} disabled/>
                        </div>
                        <div className="form-group">
                          <label>Name</label>
                          <input type="email" className="form-control" name="description" value={CharacterFormData.name} disabled></input>
                        </div>
                        <div className="form-group">
                          <label>Birthday</label>
                            <div>
                            <input type="text" className="form-control" name="Category"  value={CharacterFormData.birthday} disabled/>
                           </div>
                           <br/>
                        </div>
                        <div className="form-group">
                          <label>Image</label>
                          <img src={CharacterFormData.img} style={{height:"160px",width:"110px",padding:'10px'}} alt="" disabled/>
                        </div>

                        <div className="form-group">
                          <label>occupation </label>
                          <input type="text" className="form-control" name="Category"  value={CharacterFormData.occupation} disabled/>
                        </div>
                        <div className="form-group">
                          <label>status</label>
                          <input type="email" className="form-control" name="description" value={CharacterFormData.status} disabled></input>
                        </div>
                        <div className="form-group">
                          <label>nickname</label>
                            <div>
                            <input type="text" className="form-control" name="Category"  value={CharacterFormData.nickname} disabled/>
                           </div>
                           <br/>
                        </div>
                        <div className="form-group">
                          <label>appearance</label>
                          <input type="email" className="form-control" name="description" value={CharacterFormData.appearance} disabled></input>
                        </div>

                        <div className="form-group">
                          <label>portrayed </label>
                          <input type="text" className="form-control" name="Category"  value={CharacterFormData.portrayed} disabled/>
                        </div>
                        <div className="form-group">
                          <label>category</label>
                          <input type="email" className="form-control" name="description" value={CharacterFormData.category} disabled></input>
                        </div>
                        <div className="form-group">
                          <label>better_call_saul_appearance</label>
                            <div>
                            <input type="text" className="form-control" name="Category"  value={CharacterFormData.better_call_saul_appearance} disabled/>
                           </div>
                           <br/>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
    </div>
</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    CharacterReducer : state.CharacterReducer
  };
}
function mapDispatchToProps(dispatch) {

  return bindActionCreators({ViewCharacter: AC_VIEW_DATA},dispatch)
}
const ViewCharacterComponent = connect(mapStateToProps,mapDispatchToProps)(ViewCharacter);

export default ViewCharacterComponent;
