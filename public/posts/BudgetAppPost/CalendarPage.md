# Calendar page & future issues? with it

With the Calendar page, I am using the fullcalendar library. It provides a month, week, day, and list view,
and the ability to handle what happens when clicking a date enabling entry creation.  

The original goal of the calendar was to enable users to input payment dates so they could keep track of upcoming bills.

### Creating an entry
![Making a calendar entry](/images/BudgetAppImages/calendarEntryCreation.png "Making a calendar entry")  
![Made calendar entry view](/images/BudgetAppImages/madeEntry.png "Made calendar entry view")  

Initially, I wanted to put a full calendar on the left side of the screen and a list view on the right, but
since fullcalendar gives both I didn't think they needed to be separated so for now I'll have to think of something else 
that could be of use to complement the calendar.  

For recurring payments (i.e monthly bills) I thought it would be good to set up a frequency option be it weekly, monthly, or annual payments 
my problem comes with editing these entries, if one is edited and the user would like all edited I'm not sure how bad of an effect that would have on the database trying to update all those entries.  

### Recurring weekly till the end of the year
![Making a calendar entry](/images/BudgetAppImages/RepeatEntryCreation.png "Making a calendar entry")  
![Made calendar entry view](/images/BudgetAppImages/RepeatEntryCreated.png "Made calendar entry view")  

Other features of the calendar include drag and drop to change the entry date, clicking on the entry for a more detailed edit screen.


