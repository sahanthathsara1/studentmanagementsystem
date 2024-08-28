const router = require("express").Router();
let Student = require("../models/Student");

// http://localhost:8070/student/add
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });

    newStudent.save().then(() => {
        res.json("Student added");
    }).catch((err) => {
        console.log(err);
    });
});

// http://localhost:8070/student
router.route("/").get((req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    });
});

// http://localhost:8070/student/update/:id
router.route("/update/:id").put(async (req, res) => {
    let userID = req.params.id;
    const { name, age, gender } = req.body;

    const updateStudent = {
        name,
        age,
        gender
    };

    await Student.findByIdAndUpdate(userID, updateStudent)
        .then((user) => {
            res.status(200).send({ status: "User updated",  });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        });
});

// http://localhost:8070/student/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;
    await Student.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "User deleted"});
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting", error: err.message });
        });
});


// http://localhost:8070/student/get/
router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;
   const user = await Student.findById(userID)
        .then((user) => {
            res.status(200).send({ status: "User fetched", user: user });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetching user", error: err.message });
        });
});

module.exports = router;
