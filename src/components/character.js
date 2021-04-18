import React from 'react';
import { connect } from 'react-redux';
import { Link,Redirect} from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import { bindActionCreators } from 'redux';
import {AC_LIST_DATA} from '../action/characteraction';

class Character extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      columnDefs :[
        { "header" : "#",field:"#", valueGetter :"node.rowIndex+1",width:"50",
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
         },
         { "header" : "char_id", field :"char_id",width:"150",sortable: true,filter:true,
         cellStyle: function(params) {
                return {'font-size': '16px','margin-top': '5px'};
          }
         },
        { "header" : "name", field :"name",width:"150",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
        { "header" : "birthday", field :"birthday",width:"150",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
        { "header" : "img", field :"img",width:"200",
        cellRenderer: function (params) {
          var image = params.value;
          return '<img src='+image+' alt="Image not found" style="width: 50%; height: 100%;"/>';
       }
        },
        { "header" : "occupation", field :"occupation",width:"150",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
        { "header" : "status", field :"status",width:"150",sortable: true,filter:true,
        cellStyle: function(params) {
               return {'font-size': '16px','margin-top': '5px'};
         }
        },
       { "header" : "nickname", field :"nickname",width:"150",sortable: true,filter:true,
       cellStyle: function(params) {
              return {'font-size': '16px','margin-top': '5px'};
        }
       },
       { "header" : "appearance", field :"appearance",width:"150",sortable: true,filter:true,
       cellStyle: function(params) {
              return {'font-size': '16px','margin-top': '5px'};
        }
       },

      { "header" : "portrayed", field :"portrayed",width:"150",sortable: true,filter:true,
      cellStyle: function(params) {
             return {'font-size': '16px','margin-top': '5px'};
       }
      },
      { "header" : "category", field :"category",width:"150",sortable: true,filter:true,
      cellStyle: function(params) {
             return {'font-size': '16px','margin-top': '5px'};
       }
      },
      { "header" : "better_call_saul_appearance", field :"better_call_saul_appearance",width:"150",sortable: true,filter:true,
      cellStyle: function(params) {
             return {'font-size': '16px','margin-top': '5px'};
       }
      },
      { headerName: 'Actions', width: "300",sortable: false,filter:false,
       template:
         `<div>
         <div class="badge badge-gradient- btn-info" href='#' style={{width: "20px"}} data-action-type="View">
         <i style={{padding: "10px"}} data-action-type="View"></i>
         View
         </div>
         </div>`,
         cellStyle: function(params) {
                return {'margin-top' :'4px'};
        },
     },
      ]
    }
  }

    componentDidMount(){
       this.props.List();
      }
  onSortChanged = e => {
       e.api.refreshCells();
      }
      onRowClicked = event =>{
        const rowValue    = event.event.target;
        const value       = rowValue.getAttribute('data-action-type');
        const name        = event.data.name;
        const birthday =  event.data.birthday;
        const image       =  event.data.img;
        const id          = event.data._id;
        const occupation        = event.data.occupation;
        const status   =  event.data.status;
        const nickname          = event.data.nickname;
        const appearance        = event.data.appearance;
        const portrayed =  event.data.portrayed;
        const category       =  event.data.category;
        const better_call_saul_appearance = event.data.better_call_saul_appearance;
        if(value === 'View'){
          this.setState({redirect:'View',id:event.data.char_id})
        }

      }
  render(){
    const List = this.props.CharacterReducer.List;
    if(this.state.redirect === 'View'){
      return <Redirect to ={'/viewCharacter/'+this.state.id}/>
    }
    console.log("@@@@@@@@@@",List);
    return(
      <div className="container px-4 py-5 mx-auto">
      <div className="card card0">
        <h3 className="page-title">List Character</h3>
      </div>
      <div className="col-lg-12 grid-margin stretch-card">
      <div className="card" >
        <div className="card-body">
        <div className="card-body p-0">
        <div className="ag-theme-balham" style={ {height: '600px', width: 'auto'} }>
          <AgGridReact
              rowHeight={50}
              rowClass ={'centerAlign'}
              onSortChanged={this.onSortChanged}
              rowSelection={'single'}
              onRowClicked={(e)=>this.onRowClicked(e)}
              pagination={true}
              paginationAutoPageSize={true}
              suppressCellSelection = {true}
              columnDefs={this.state.columnDefs}
              rowData={List}>
          </AgGridReact>
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
    CharacterReducer   : state.CharacterReducer,
  };

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({List:AC_LIST_DATA},dispatch);
}
const CharacterComponent = connect(mapStateToProps,mapDispatchToProps)(Character);
export default CharacterComponent;
