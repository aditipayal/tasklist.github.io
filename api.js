const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sha1 = require('sha1');
//mongoose 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/taskapp",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const app = express();
app.use(cors());
app.use(bodyParser.json());
// define api 
app.listen(8890,function(){
    console.log("Work on 8890");
});
let registerModel = require('./database/register');
let taskModel = require('./database/task');
let feedModel = require('./database/feed');
//login api
app.post('/api/loginpanel',function(req,res){
    let email = req.body.email;
    let password = sha1(req.body.password);
    registerModel.find({'email':email,'password':password},function(err,data){
        if(err){
            res.json({'err':1,'msg':'Problem in login'});
        }
        else if(data.length == 0){
            res.json({'err':1,'msg':'Email or Password is not correct'});
         }
         else{
             res.json({'err':0,'msg':'Login Success','ulogin':email});
         }
    })
})
//register panel api
app.post('/api/registerpanel',function(req,res){
    let name = req.body.username;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let password = sha1(req.body.password);
    let ins = new registerModel({'name':name,'email':email,'mobile':mobile,'password':password});
    ins.save(function(err){
        if(err){}
        else{
            res.json({'err':0,'msg':'DataSaved'});
        }
    })
})

// add task api
app.post('/api/addtaskpanel',function(req,res){
            let sno = req.body.sno;
            let taskname = req.body.taskname;
            let tasklabels = req.body.tasklabels;
            let taskdescription = req.body.taskdescription;
            let dateadded = req.body.dateadded;
            let datecompletion = req.body.datecompletion;
            let status = req.body.status;
            let ins = new taskModel({'sno':sno,'taskname':taskname,'tasklabels':tasklabels,'taskdescription':taskdescription,'dateadded':dateadded,'datecompletion':datecompletion,'status':status});
            ins.save(function(err){
                if(err){}
                else
                {
                    res.json({'err':0,'msg':'task saved'});
                }
            })
})

//fetch add task data

app.get('/api/addgettask',function(req,res){
    taskModel.find({},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})

//delete task

app.get('/api/deletetask/:id',function(req,res){
    let cid = req.params.id;
    taskModel.remove({'_id':cid},function(err){
        if(err){}
        else
        {
            res.json({'err':0,'msg':'Task Deleted'});
        }
    })
})

// change password

app.post('/api/changeadminpass',function(req,res){
    let oldpass = sha1(req.body.oldpass);
    let newpass = sha1(req.body.newpass);
    let uid = req.body.uid;
    registerModel.updateOne({'email':uid},{$set:{'password':newpass}},function(err){
            if(err){}
            else{
                res.json({'err':0, 'msg': 'Password Changed'});
            }
    })
})

// add feedback in db

app.post('/api/addfeed',function(req,res){
    let name = req.body.feedname;
    let email = req.body.feedemail;
    let mobile = req.body.feedmobile;
    let message = req.body.feedmessage;
    let ins = new feedModel({'name':name,'email':email,'mobile':mobile,'message':message});
    ins.save(function(err){
        if(err){}
        else{
            res.json({'err':0,'msg':'DataSaved'});
        }
    })
})


//fetch task data

app.get('/api/fetchtaskbyid/:id',function(req,res){
    let cid = req.params.id;
    taskModel.find({'_id': cid},function(err,data){
        if(err){}
        else{
            res.json({'err':0,'cdata':data});
        }
    })
})

//update task

app.post('/api/updatetask/:id',function(req,res){
        let cid = req.params.id;
        let sno = req.body.sno;
        let taskname = req.body.taskname;
        let tasklabels = req.body.tasklabels;
        let taskdescription = req.body.taskdescription;
        let dateadded = req.body.dateadded;
        let datecompletion = req.body.datecompletion;
        let status = req.body.status;
            taskModel.updateOne({'_id':cid},{$set:{'sno':sno,'taskname':taskname,'tasklabels':tasklabels,'taskdescription':taskdescription,'dateadded':dateadded,'datecompletion':datecompletion,'status':status}},function(err){
                if(err){}
                else{
                    res.json({'err':0,'msg':'Task Updated'});
                }
            })
})