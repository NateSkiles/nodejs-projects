const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


// Handle TASKS endpoint requests
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()

        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})

        res.send(tasks)
    } catch (e) {
        res.status(500).send(task)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            res.status(404).send({ error: 'Task not found' })
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!task) {
            return res.status(404).send({ error: 'Task not found' })
        }
        
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findByIdAndDelete(_id)

        if (!task) {
            return res.status(404).send({ error: 'Task not found' })
        }

        res.send(task)
    } catch (e) {
        return res.status(400).send(e)   
    }
})

module.exports = router