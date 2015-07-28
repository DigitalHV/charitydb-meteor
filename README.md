# charitydb-meteor
Open source database of charity organizations and metadata (built with Meteor). 


## Data Source
The initial data was downloaded from the [IRS](http://apps.irs.gov/app/eos/mainSearch.do?mainSearchChoice=pub78&dispatchMethod=selectSearch) site on Jul 28, 2015 and contains approximately 938213 records. Each record provides the following information:

 * EIN 
 * Name 
 * City 
 * State 
 * Country 
 * Deductibility Status


The descriptions of these fields have been replicated below (for convenience) from the information provided on that site.

### EIN

Is the Employer Identification Number (EIN) of the organization. The EIN is also known as a federal Tax Identification Number (TIN), and is used to identify a business or nonprofit entity. An EIN is a unique 9-digit number, similar to a Social Security Number for an individual. 

### Name

Is the legal name or "doing business as" (dba) name of the organization. 

### City

Is the city that is included in the organization's address or organizations' addresses that are on file with the IRS.

### State
Is the state that is included in the organization's address or organizations' addresses that are on file with the IRS

### Country

Based on the search parameters provided by the [IRS Site] (http://apps.irs.gov/app/eos/pub78Search.do?dispatchMethod=navigateSearch&pathName=forwardToPub78Search&searchChoice=pub78) the current list of supported countries include:

 * United States
 * Canada
 * Israel
 * Mexico

 Note that the original data is not perfectly indexed -- only the United States organizations have "State" information entered. By comparison, the Canada charities have no state information entered, but their "City" information is provided in the format "city state" -- we need to normalize that entry.

### Deductibility Status

Describes the basis for the organization's or organizations' ability to accept tax-deductible, charitable contributions. The currently valid codes are given below. The numbers in parenthesis indicate the deductibility limitation.

 * PC = A public charity (50%)
 * POF = A private operating foundation (50%)
 * PF = A private foundation
 * GROUP = A central organization holding a group exemption letter, whose subordinate units covered by the group exemption are also eligible to receive tax-deductible contributions, even though they are not separately listed. (Depends)
 * LODGE = A domestic fraternal society, operating under the lodge system, but only if the contribution is to be used exclusively for charitable purposes. (30%)
 * UNKWN = A charitable organization whose public charity status has not been determined. (Depends)
 * EO = An organization described in section 170(c) of the Internal Revenue Code other than a public charity or private foundation. (Depends)
 * FORGN = A foreign-addressed organization. These are generally organizations formed in the United States that conduct activities in foreign countries. Certain foreign organizations that receive charitable contributions deductible pursuant to treaty are also included, as are organizations created in U.S. possessions (Depends)
 * SO = A Type I, Type II, or functionally integrated Type III supporting organization.(50%)
 * SONFI = A non-functionally integrated Type III supporting organization. (50%)
 * SOUNK = A supporting organization, unspecified type. (50%)



