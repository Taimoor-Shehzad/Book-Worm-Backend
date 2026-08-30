import express from 'express'

const router= express.Router()

router.post('/resgister',async(req,res)=>{
  res.send('Register Page')
 })

router.post('/login',async(req,res)=>{
  res.send('Login page')
})

export default router