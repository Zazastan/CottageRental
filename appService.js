/**
 * Created by Mikki on 19.1.2017.
 */


start
    .service("appService",function(){
        this.cottage = {};
        this.startDate ="";
        this.endDate = "";
        this.user ={};


        this.getCottage = function(){
            return this.cottage;
        };
        this.setCottage = function(newCottage){
            this.cottage = newCottage;
        };

        this.setDates = function(newStartDate, newEndDate){
            this.startDate = newStartDate;
            this.endDate = newEndDate;
        };
        this.getStartDate = function(){
            return this.startDate;
        };
        this.getEndDate = function(){
            return this.endDate;
        };

        this.setUser = function(newUser){
            this.user = newUser;
        };
        this.getUser = function(){
            return this.user;
        };
        this.logout = function(){
            this.user = {};
        }


    })

;