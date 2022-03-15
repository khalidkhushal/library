const express = require(`express`);

const router = express.Router();
const { books, students } = require(`C:/Users/92343/Desktop/node_prac/remote_task/models`);



//home page route
router.get(`/`, async(req, res) => {

    student = await students.findAll().catch(err => { console.log(err) })
    book = await books.findAll().catch(err => { console.log(err) })

    res.render(`lists`, { student, book })
    res.end();
})

router.get(`/students`, async(req, res) => {

    student = await students.findAll().catch(err => { console.log(err) })

    res.render(`students`, { student })
    res.end();
})

router.get(`/books`, async(req, res) => {

    book = await books.findAll().catch(err => { console.log(err) })

    res.render(`books`, { book })
    res.end();
})

router.get(`/update_student`, async(req, res) => {
    const id = req.query.id;
    const student = await students.findOne({
        where: {
            id: id,
        }
    }).catch(err => {
        console.log(err);
    })
    res.render(`student_form`, { student })
})

router.get(`/update_book`, async(req, res) => {
    const id = req.query.id;
    const book = await books.findOne({
        where: {
            id: id,
        }
    }).catch(err => {
        console.log(err);
    })
    res.render(`books_form`, { book })
})

//API for adding student data to database, added through postman
router.post(`/student`, async(req, res) => {
    const { First_name, Last_name } = req.body;

    student = await students.create({ First_name, Last_name })
        .then(() => {
            console.log(`Student Added`);
            res.send(`Student Added`)
        }).catch(err => { console.log(err) });
    res.end();
})


//API for adding book data to database, added through postman
router.post(`/book`, async(req, res) => {

    const book_name = req.body.book_name;
    const author_name = req.body.author_name;
    const borrowed_by = req.body.borrowed_by;

    if (req.body.date_of_borrow && req.body.date_of_return) {

        date_of_borrow = req.body.date_of_borrow;
        date_of_return = req.body.date_of_return;

        book = await books.create({ book_name, author_name, borrowed_by, date_of_borrow, date_of_return }).then(() => {
            console.log(`Book Added`);
            res.send(`Book Added`)
        }).catch(err => { console.log(err) });

    } else {
        book = await books.create({ book_name, author_name, borrowed_by, }).then(() => {
            console.log(`Book Added`);
            res.send(`Book Added`)
        }).catch(err => { console.log(err) });

    }
    res.end()

})


//updating student data
router.put(`/update_student/:id`, async(req, res) => {
    id = req.params.id;
    const { First_name, Last_name } = req.body;
    if (!req.body) {
        res.status(404).send('updating data couldnt succeed at' + id);
        return;
    } else {
        students.update({
                First_name,
                Last_name
            }, {
                where: {
                    id: id,
                },
            })
            .then(data => {
                if (!data) {
                    res.status(500).send('update can\'t be empty');
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(404).send({ message: err.message || 'an error accured while updating user data' });
            });
    }
})


//updating book data
router.put(`/update_book/:id`, async(req, res) => {
    id = req.params.id;
    const { book_name, author_name, borrowed_by, date_of_borrow, date_of_return } = req.body;
    if (!req.body) {
        res.status(404).send('updating data couldnt succeed at' + id);
        return;
    } else {
        books.update({
                book_name,
                author_name,
                borrowed_by,
                date_of_borrow,
                date_of_return
            }, {
                where: {
                    id: id,
                },
            })
            .then(data => {
                if (!data) {
                    res.status(500).send('update can\'t be empty');
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(404).send({ message: err.message || 'an error accured while updating user data' });
            });
    }
})


module.exports = router;