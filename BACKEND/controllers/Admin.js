import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ALLOWED_ORIGINS = 'http://localhost:5173';


export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      attributes: ["id", "email"],
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const {  email, password  } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Admin.create({
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};
export const tes = async (req, res) => {
    const admin = await Admin.findAll({
        where: {
          email: req.body.email,
        },
      });
      res.json({usr : admin})
}
export const Login = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, admin[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    const adminId = admin[0].id;
    const email = admin[0].email;
    const accessToken = jwt.sign(
      { adminId,  email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { adminId,  email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Admin.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: adminId,
        },
      }
    );//REFRESH NOT ACCESSTOKEN FOR COOKIES
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan",err : error });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const admin = await Admin.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!admin[0]) return res.sendStatus(204);
  const adminId = admin[0].id;
  await Admin.update(
    { refresh_token: null },
    {
      where: {
        id: adminId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
