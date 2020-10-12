/** Dto */
const programDto = require("../../model/dto/program.dto");
const facultyDto = require("../../model/dto/faculty.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createProgram = (req, res, next) => {
    //facultyDto.getByCode({code: req.body.codeFa}, (err, u) => {
    let prg = {
        code: req.body.code,
        name: req.body.name,
        nameDirec: req.body.nameDirec,
        idFacul: req.body.facultyId
    };
    programDto.create(prg, (err, data) => {
        if (err) {

            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
    //});
};

exports.updateProgram = (req, res, next) => {
    facultyDto.getByCode({ code: req.body.codeFa }, (err, u) => {
        let prg = {
            code: req.body.code,
            name: req.body.name,
            nameDirec: req.body.nameDirec,
            idFacul: u[0]._id
        };

        programDto.update({ _id: req.body.id }, prg, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }

            res.status(201).json(
                {
                    info: data
                }
            );
        });
    });
};

exports.getAll = (req, res, next) => {

    programDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByCode = (req, res, next) => {

    programDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deleteProgram = () => {
    programDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        res.status(204).json();
    });
}