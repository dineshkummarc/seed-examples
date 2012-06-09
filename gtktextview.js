#!/usr/bin/env seed
Gtk = imports.gi.Gtk;
Gtk.init (null, null);

var window = new Gtk.Window();
var view = new Gtk.TextView();
var buffer = view.buffer;

window.signal.hide.connect(Gtk.main_quit);

var ret_begin = {}

buffer.get_start_iter (ret_begin);

buffer.insert(ret_begin.iter, "Hello GtkTextView world.", -1);

window.add(view);
window.show_all();
window.resize(300, 300);

Gtk.main();

