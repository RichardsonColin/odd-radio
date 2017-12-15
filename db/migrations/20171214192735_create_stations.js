exports.up = function(knex, Promise) {
  return knex.schema.createTable('stations', (table) => {
    table.increments();
    table.string('name');
    table.string('audio_feed');
    table.string('home_page');
    table.string('city');
    table.string('province');
    table.string('description');
    table.string('frequency');
    table.string('language');
    table.string('stream_type');

  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stations');


};
