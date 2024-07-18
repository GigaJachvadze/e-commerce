'use strict';

module.exports.adminpanel = {
    models: {

        pages: {

            title: 'Pages',
            model: 'Page',

            list: {
                fields: {
                    id: 'ID',
                    name: 'Article name'
                }
            },

            edit: {
                fields: {
                    name: 'Article name',
                    content: {
                        type: 'wysiwyg',
                        title: 'Article body'
                    }
                }
            }
        }
    }
};