<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('category_id');
//            $table->foreign('category_id')->references('id')->on('categories');
//            $table->foreignId('category_id')->constrained()->onDelete('cascade');

            $table->string('description')->nullable();
            $table->string('cover')->default('/img/v1.png');
            $table->string('source')->nullable();
            $table->unsignedBigInteger('stars')->default(0);
            $table->unsignedBigInteger('views')->default(0);
            $table->unsignedFloat('rating')->default(0);;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
    }
}
