/**
 * Created by Oclemy
 */
    //GLOBAL DECLARATIONS
var nameTxt=document.getElementById("galaxyNameID");
var displaySection=document.getElementById("displaySectionID");
var galaxies=['Pinwheel','Cartwheel',"Ring Nebular","Virgo Stellar Stream","Canis Majos Overdensity","Triangulum"];

/*
- Our ListSorter class.
- Creates a ListView given an array of data.
- Able to sort that array in ascending or descending manner.
 */
var ListSorter= function () {
    /*
     SHOW LISTVIEW
     */
    this.show=function(){
        displaySection.innerHTML="";
        displaySection.appendChild(this.createListVew());
    }
    /*
     CREATE LISTVIEW WITH INITIAL DATA
     */
    this.createListVew=function()
    {
        var listView=document.createElement('ol');
        listView.className="collection";
        for(var i=0;i<galaxies.length;i++)
        {
            var listViewItem=document.createElement('li');
            listViewItem.className="collection-item";
            listViewItem.appendChild(document.createTextNode(galaxies[i]));
            listView.appendChild(listViewItem);
        }
        return listView;
    }
    /*
     ADD NEW ITEM TO DATA SOURCE AND CALL SHOW
     */
    this.addNewItem=function(galaxyName)
    {
        galaxies.push(galaxyName);
        galaxies.sort();
        nameTxt.value="";
        this.show();
    }
    /*
    SORT DATA ASCENDING OR DESCENDING
     */
    this.sortData=function(asc)
    {
        if(asc)
        {
            galaxies.sort();
            this.show();
        }else
        {
            galaxies.reverse();
            this.show();
        }
    }
}
var sorter=new ListSorter();
//EXPOSE OUR FUNCTIONS GLOBALLY
function addItem(){sorter.addNewItem(nameTxt.value);}
function sortAsc(){sorter.sortData(true)}
function sortDesc(){sorter.sortData(false)}
sorter.show();


