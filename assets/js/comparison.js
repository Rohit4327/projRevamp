function hmScreen1Click() {
    
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. User Salutation with Search & Filter</span> <br><br>
	<span class="oldElement">2. Revamped Stories</span> <br><br>
    <span class="newElement">3. In-Post Follow Button</span> <br><br>
	<span class="oldElement">4. New Post Layout</span> <br><br>
    <span class="oldElement">5. Bottom Navigation with page navigation buttons</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline with Featured Content';
}
function hmScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <i class="fa-sharp fa-regular fa-circle-check"></i> Timeline without featured post 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline Screen';
}
function hmScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">6. Revamped Comment Section</span> <br><br>
	<span class="newElement">6a. More option, toggle added</span> <br><br>
    <span class="newElement">7. Sticky header with search bar and other options</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Revamped Comment Section';
}
function hmScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">8. Carousel Post</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Carousel Post';
}
function hmScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">9. Auto suggested Content recommendations <span> <br> <span style="font-size: 13px;">will appear automatically after interaction with contents on the timeline</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Content Recommendations';
}
function hmScreen6Click() {
    document.getElementById("mockupSec").src="assets/images/Homepage-Screens/Home6.png";
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <i class="fa-sharp fa-regular fa-circle-check"></i> Communities/People recommendations
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 6 - Communities/People Recommendations';
}

//Write a post Screen JS
function wapScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. On clcking "<i class="fa-solid fa-circle-plus"></i>" icon, "<b>Post/Media Upload</b>" menu drawer will come
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline Screen';
}
function wapScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">2. Menu Drawer will include upload action buttons, <br>&nbsp;&nbsp;&nbsp; a. Write a Post <br>&nbsp;&nbsp;&nbsp; b. Share a Story <br>&nbsp;&nbsp;&nbsp; c. Share a Clip <br>&nbsp;&nbsp;&nbsp; d. Go Live <br>&nbsp;&nbsp;&nbsp; e. Create Poll <br>&nbsp;&nbsp;&nbsp; f. Say Thanks
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Upload Post menu drawer';
}
function wapScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">3. Write a Post Section <br>
        <span style="font-size: 13px;">Post section area where users can
        add the texual content as well as media in it</span> 
    </span> <br><br>
	<span class="newElement">4. Add Media content drawer (Sticky) <br>
        <span style="font-size: 13px;">By default this drawer will be sticked at bottom</span>
    </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Write a post drawer';
}
function wapScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">5. Add Media content drawer (with more upload options) <br>
        <span style="font-size: 13px;">On dragging up the drawer will show more upload options</span>
    </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'More options for post upload';
}
function wapScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">6. Add Image media drawer <br>
        <span style="font-size: 13px;">At first there will be Camera Roll followed by
        other imege media options in the dropdown</span>
    </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'WAP Section (Camera roll drawer)';
}
function wapScreen6Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">7. Media upload Count <br>
        <span style="font-size: 13px;">Based on media files upload counter will get reflect</span>
    </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 6/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'WAP Section (Media added to post view)';
}
function wapScreen7Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement"> a. Hashtags suggestion will come based on textual input </span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 7/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'WAP Section (Tag Suggestions view)';
}
function wapScreen8Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement"> 8. Newly added Tag people drawer </span> <br><br>
    <span class="newElement"> 9. Selected/Tagged People section </span> <br><br>
    <span class="newElement"> 10. People Suggestion section </span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 8/8';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Tag People drawer';
}

//Jobs Page Click JS
function jobsScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. Search box with filters</span> <br><br>
    <span class="newElement">1a. Create New opportunity button</span> <br><br>
	<span class="newElement">2. Recent Search recommendations</span> <br><br>
    <span class="newElement">3. Recommended & other categories opportunity listing</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'New Opportunity Homepage';
}
function jobsScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">4. Opportunity by categories listing</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Opportunity page with scroll and Category listing';
}
function jobsScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">5. Opportunity Profile page</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Opportunity Profile page';
}
function jobsScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">6. Sticky header</span> <br><br>
    <span class="newElement">7. Sticky footer with page options</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Opportunity Profile - with Scroll';
}
function jobsScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">8. Opportunity recommendations on timeline page</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Opportunity recommendation';
}

//Sphere page js changes
function sphScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">1. In Bottom navigation drawer <br> by Clicking Icon next to Home "<b>Collaborations</b> drawer will come"</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline Screen';
}
function sphScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">2. The Collaborations Drawer will include 2 options to select, <br>&nbsp;&nbsp;&nbsp; a. Community <br>&nbsp;&nbsp;&nbsp; b. Sphere </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline with Featured Content';
}
function sphScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">3. User can newly create Sphere as he can also search for it <br> using filters </span> <br><br>
    <span class="newElement">4. Sphere listing </span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline with Featured Content';
}

//Communities page js changes
function commScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">1. In Bottom navigation drawer <br> by Clicking Icon next to Home "<b>Collaborations</b> drawer will come"</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline Screen';
}
function commScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">2. The Collaborations Drawer will include 2 options to select, <br>&nbsp;&nbsp;&nbsp; a. Community <br>&nbsp;&nbsp;&nbsp; b. Sphere </span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline with Featured Content';
}
function commScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">3. User can newly create Communities as he can also search for it <br> using filters </span> <br><br>
    <span class="newElement">4. Communities listing </span> <br><br>
    <span class="newElement">4. Community Categories listing </span>    
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Timeline with Featured Content';
}

//Events page JS Changes
function eventsScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. Create new Event or search for it using filters</span> <br><br>
	<span class="newElement">1a. Date Filter</span> <br><br>
    <span class="newElement">1b. Event Notification Toggle</span> <br><br>
    <span class="newElement">2. "<b>For You</b> Event Listing"</span> <br><br>
	<span class="newElement">3. Button for showing all results</span> <br><br>
    <span class="newElement">4. Other category listing</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Events Homepage';
}
function eventsScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">5. Calender Filter Drawer <br> It will appear on clicking the "<b>Date Filter</b> on Event Home"</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Calender Filter Drawer';
}
function eventsScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">6. Event in Spotlight Section <br> <span style="font-size: 13px;">will show featured event</span></span> <br><br>
    <span class="newElement">7. Saved Events Section</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Events in Spotlight & Other categories';
}
function eventsScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">7. Event Profile Page</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Events Profile page';
}
function eventsScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">Each tags are individual category for the events <br> will show dedicated pages including event list for specified tags</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Tagged Event List page';
}

//Video Channel page JS changes
function vidChScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">1. Search for the video defining filters</span> <br><br>
    <span class="newElement">2. Video revision filters</span> <br><br>
    <span class="oldElement">3. Search result container <span class="newElement">and will show Video Category listing as well</span></span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/2';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Video Channel Homepage';
}
function vidChScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">4. Sticky Header with filters</span> <br><br>
    <span class="newElement">5. Posted by Community Video Container</span> <br><br>
    <span class="newElement">6. Posted by Network Video Container including other categories</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/2';
    document.getElementById("screenTitleTxtFeat2").textContent = 'VC Homepage - with Sticky header & Other details';
}

//Search page JS changes
function seScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. Recent search filter list <br> <span style="font-size: 13px;">will help users to decide search
    the specific content based on user activity</span></span> <br><br>
    <span class="newElement">2. Search Recommendations</span> <br><br>
    <span class="newElement">3. Trending Post list</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Search Screen Homepage';
}
function seScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">4. Page Filter Section with Search desc. label</span> <br><br>
    <span class="oldElement">5. "<b>People</b>" & other category search listing</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Search page with generalised result';
}
function seScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">6. Tag selection specific search results</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/3';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Search page result on tag selection';
}

//Announcements page JS changes
function annScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">1. Search Announcements with filters</span> <br><br>
    <span class="newElement">1a. "<b>Posted by you</b>" announcement listing</span> <br><br>
    <span class="newElement">2. Date Filter <br> <span style="font-size: 13px;">By Default "<b>This Week</b>" filter will be enabled</span></span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Annoncement Homepage';
}
function annScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">3. Announcement listing</span> <br><br>
    <span class="newElement">4. Sticky header</span> <br><br>
    <span class="newElement">4a. Create Announcement Button</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Announcement Homepage with scroll';
}
function annScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">5. Create Announcement Drawer <br> <span style="font-size: 13px;">Here <b>Image</b> as a background has been selected</span></span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Create New Announcement';
}
function annScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">6. New Announcement creation success drawer</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Popup drawer for New Announcement created';
}
function annScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">7. New Announcement created & added in Posted by you section</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'New Announcement Created';
}

//Profile page JS changes
function proScreen1Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="oldElement">1. Search bar with other options</span> <br><br>
    <span class="newElement">2. Profile Achievements Tracker</span> <br><br>
    <span class="oldElement">3. User Profile Section</span> <br><br>
    <span class="newElement">4. Profile overview actions</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 1/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Profile page - Self';
}
function proScreen2Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">Profile page of Other user</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 2/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Profile page - Other';
}
function proScreen3Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">5. Shared post by Type & Date Filter</span> <br><br>
    <span class="newElement">6. Post activity results section</span> <br><br>
    <span class="newElement">7. Events activity results section</span> 
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 3/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Profile page with scroll';
}
function proScreen4Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">8. Select content type drawer</span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 4/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Select Content type drawer';
}
function proScreen5Click() {
    document.getElementById("screen1Details").innerHTML=`
    <span class="featDeailsTxt"><b>Feature details :</b></span> <br><br>
    <span class="newElement">9. Post activity result section <br> <span style="font-size: 13px;">After selecting type from filter, specified list will come</span></span>
    `;

    document.getElementById("screenTitleTxtFeat").textContent = 'Screen 5/5';
    document.getElementById("screenTitleTxtFeat2").textContent = 'Activity Section - Type Selected';
}

$(window).on('load', function () {
    $('#compScrLayout1').addClass('active');
});

$(document).ready(function(){
    $('button.btn-fresco').click(function(){
        $('button.btn-primary.active').removeClass('active');
        $(this).addClass('active');
    });
});

function changeLayout1() {
    window.location.reload();
}

function changeLayout1a() {
    // document.getElementById('hotspotFlags').style.display = "none";

    document.getElementById("screenFeaturesContainer").innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="hmScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="hmScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="hmScreen3Click();" id="item-3">
        <input type="radio" name="slider" onclick="hmScreen4Click();" id="item-4">
        <input type="radio" name="slider" onclick="hmScreen5Click();" id="item-5">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Homepage-Screens/Home1.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Homepage-Screens/Home2.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Homepage-Screens/Home3.png"
                    alt="song">
            </label>
            <label class="card" for="item-4" id="song-4">
                <img src="assets/images/Homepage-Screens/Home4.png"
                    alt="song">
            </label>
            <label class="card" for="item-5" id="song-5">
                <img src="assets/images/Homepage-Screens/Home5.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout2() {

    document.getElementById('screenFeaturesContainerWAP').innerHTML = `
    <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
		<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="wapScreen1Click();" id="wapitem-1" checked>
        <input type="radio" name="slider" onclick="wapScreen2Click();" id="wapitem-2">
        <input type="radio" name="slider" onclick="wapScreen3Click();" id="wapitem-3">
        <input type="radio" name="slider" onclick="wapScreen4Click();" id="wapitem-4">
        <input type="radio" name="slider" onclick="wapScreen5Click();" id="wapitem-5">
        <input type="radio" name="slider" onclick="wapScreen6Click();" id="wapitem-6">
        <input type="radio" name="slider" onclick="wapScreen7Click();" id="wapitem-7">
        <input type="radio" name="slider" onclick="wapScreen8Click();" id="wapitem-8">
        <div class="cards">
            <label class="card" for="wapitem-1" id="wapsong-1">
                <img src="assets/images/WAP-Screens/Home.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-2" id="wapsong-2">
                <img src="assets/images/WAP-Screens/HomeWapDrawer.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-3" id="wapsong-3">
                <img src="assets/images/WAP-Screens/WAPDrawer.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-4" id="wapsong-4">
                <img src="assets/images/WAP-Screens/WAP_MoreOptions.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-5" id="wapsong-5">
                <img src="assets/images/WAP-Screens/WAP_AddImages.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-6" id="wapsong-6">
                <img src="assets/images/WAP-Screens/WAP_ImgMediaAdded.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-7" id="wapsong-7">
                <img src="assets/images/WAP-Screens/WAP_MediaCounter.png"
                    alt="song">
            </label>
            <label class="card" for="wapitem-8" id="wapsong-8">
                <img src="assets/images/WAP-Screens/WAP_TagPeople.png"
                    alt="song">
            </label>
        </div>
	</div>
	<div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	</div>
    `;

    $('#wapitem-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout3() {

    document.getElementById('screenFeaturesContainerJobs').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="jobsScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="jobsScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="jobsScreen3Click();" id="item-3">
        <input type="radio" name="slider" onclick="jobsScreen4Click();" id="item-4">
        <input type="radio" name="slider" onclick="jobsScreen5Click();" id="item-5">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Jobs-Screens/JobsHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Jobs-Screens/JobsHome2.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Jobs-Screens/JobsProfile.png"
                    alt="song">
            </label>
            <label class="card" for="item-4" id="song-4">
                <img src="assets/images/Jobs-Screens/JobsProfileScroll.png"
                    alt="song">
            </label>
            <label class="card" for="item-5" id="song-5">
                <img src="assets/images/Jobs-Screens/JobsRecommTimeline.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout4() {

    document.getElementById('screenFeaturesContainerSphere').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="sphScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="sphScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="sphScreen3Click();" id="item-3">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Sphere-Screens/SphereHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Sphere-Screens/SphereActions.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Sphere-Screens/SphereHome2.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout5() {

    document.getElementById('screenFeaturesContainerComm').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="commScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="commScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="commScreen3Click();" id="item-3">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Sphere-Screens/SphereHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Sphere-Screens/SphereActions.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Sphere-Screens/CommunitiesHome.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout6() {

    document.getElementById('screenFeaturesContainerEvents').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="eventsScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="eventsScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="eventsScreen3Click();" id="item-3">
        <input type="radio" name="slider" onclick="eventsScreen4Click();" id="item-4">
        <input type="radio" name="slider" onclick="eventsScreen5Click();" id="item-5">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Events-Screens/EventsHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Events-Screens/EventsCalender.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Events-Screens/EventsCategories.png"
                    alt="song">
            </label>
            <label class="card" for="item-4" id="song-4">
                <img src="assets/images/Events-Screens/EventsProfile.png"
                    alt="song">
            </label>
            <label class="card" for="item-5" id="song-5">
                <img src="assets/images/Events-Screens/TaggedEvents.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout7() {

    document.getElementById('screenFeaturesContainerVidCh').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="vidChScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="vidChScreen2Click();" id="item-2">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/VidChannel-Screens/VidChannelHome2.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/VidChannel-Screens/VidChannelTagSel.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout8() {

    document.getElementById('screenFeaturesContainerSearch').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="seScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="seScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="seScreen3Click();" id="item-3">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Search-Screens/SearchHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Search-Screens/SearchCategories.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Search-Screens/SearchTagSel.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout9() {

    document.getElementById('screenFeaturesContainerAnnoun').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="annScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="annScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="annScreen3Click();" id="item-3">
        <input type="radio" name="slider" onclick="annScreen4Click();" id="item-4">
        <input type="radio" name="slider" onclick="annScreen5Click();" id="item-5">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Announcements-Screens/AnnouncementsHome.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Announcements-Screens/AnnouncementsHome2.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Announcements-Screens/CreateAnnon2.png"
                    alt="song">
            </label>
            <label class="card" for="item-4" id="song-4">
                <img src="assets/images/Announcements-Screens/AnnSuccessDrawer.png"
                    alt="song">
            </label>
            <label class="card" for="item-5" id="song-5">
                <img src="assets/images/Announcements-Screens/AnnouncementCreated.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function changeLayout10() {

    document.getElementById('screenFeaturesContainerProfile').innerHTML = `
        <div id="scHalf1" class="sc-container1 frescoBackgroundForDivBox containerHalf1" style="margin-left: 0; margin-right: 5px;">
        <div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex justify-content-between flex-row-reverse screenCount">
	    	<span id="screenTitleTxtFeat" style="font-size: 20px">Screen 1</span>
	    </div>
        <input type="radio" name="slider" onclick="proScreen1Click();" id="item-1" checked>
        <input type="radio" name="slider" onclick="proScreen2Click();" id="item-2">
        <input type="radio" name="slider" onclick="proScreen3Click();" id="item-3">
        <input type="radio" name="slider" onclick="proScreen4Click();" id="item-4">
        <input type="radio" name="slider" onclick="proScreen5Click();" id="item-5">
        <div class="cards">
            <label class="card" for="item-1" id="song-1">
                <img src="assets/images/Profile-Screens/ProfileSelf.png"
                    alt="song">
            </label>
            <label class="card" for="item-2" id="song-2">
                <img src="assets/images/Profile-Screens/ProfileOther.png"
                    alt="song">
            </label>
            <label class="card" for="item-3" id="song-3">
                <img src="assets/images/Profile-Screens/ProfileScroll.png"
                    alt="song">
            </label>
            <label class="card" for="item-4" id="song-4">
                <img src="assets/images/Profile-Screens/PostContentType.png"
                    alt="song">
            </label>
            <label class="card" for="item-5" id="song-5">
                <img src="assets/images/Profile-Screens/ContentTypeSel.png"
                    alt="song">
            </label>
        </div>
	    </div>
	    <div class="sc-container2 bgColorSec2 containerHalf2" style="margin-right: 0; margin-left: 5px;">
	    	<div class="scMockup-Title scMockup-Title-OLD margin-top-Sec1 d-flex">
                <span id="screenTitleTxtFeat2">Screen 1</span>
	    	</div>
	    	<div id="half2" class="scMockup-container2 d-flex justify-content-center">
	    		<div id="screen1Details" class="featureDesc1">
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Newly redesigned Timeline Screen <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> Users salutation and Search with Filter button <br><br>
	    			<i class="fa-sharp fa-regular fa-circle-check"></i> In Post Follow button
	    		</div>
	    	</div>
	    </div>
    `;

    $('#item-1').click();

    $('#scHalf1').ready(function(){
        $('#screentBtn1').addClass('active');
        $('button.contBtn').click(function(){
            $('button.btn-primary.contBtn.active').removeClass('active');
            $(this).addClass('active');
        });
    });
}